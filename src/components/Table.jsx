import React, { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../lib/firebase";

import { PaystackButton } from "react-paystack";

const config = {
	reference: new Date().getTime().toString(),
	email: "user@example.com",
	amount: 150000,
	publicKey: "pk_test_06f0f6d5f5222c1fd5316744a827130dfd91b7da",
	currency: "KES",
};

const Table = () => {
	const { user } = UserAuth();

	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		if (!user || !user.email) return;
		const docRef = doc(db, "bookings", user?.email);

		// Reference the specific document

		// Subscribe to document changes
		const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
			if (docSnapshot.exists()) {
				// Update state with the new data
				setBookings(docSnapshot.data().bookings);
			} else {
				// Handle document not found scenario (optional)
				console.log("No such document!");
			}
		});

		return () => {
			unsubscribe();
		};
	}, [user?.email]);

	const handlePaystackSuccessAction = async (reference, uuid) => {
		const userEmail = user?.email;
		const docRef = doc(db, "bookings", userEmail);

		if (reference.status === "success") {
			const index = bookings.findIndex((booking) => booking.uuid === uuid);

			if (index !== -1) {
				// Update the attribute
				const updatedBookings = [...bookings];
				updatedBookings[index].paid = true;

				try {
					await updateDoc(docRef, { bookings: updatedBookings });
					console.log("Attribute updated successfully");
				} catch (error) {
					console.error("Error updating document:", error);
				}
			} else {
				console.log("Booking not found");
			}
		}
		// Find the index of the booking with the provided UUID
	};

	const handlePaystackCloseAction = () => {
		console.log("closed");
	};

	return (
		<div className="overflow-x-auto">
			<table className="table table-zebra">
				{/* head */}
				<thead>
					<tr>
						<th>Gynecologist</th>
						<th>Service</th>
						<th>Date</th>
						<th>Status</th>
						<th>Paid</th>
						<th>Pay</th>
					</tr>
				</thead>
				<tbody>
					{bookings.map((booking, index) => (
						<tr key={index}>
							<td>
								<div className="flex items-center gap-3">
									<div className="mask mask-squircle w-12 h-12">
										<img src={booking?.gynaPic} alt="gyna pic" />
									</div>
									<div>
										<div className="font-bold">{booking?.gynaName}</div>
										<div className="text-sm opacity-50">
											{booking?.gynaEmail}
										</div>
									</div>
								</div>
							</td>
							<td>{booking?.service}</td>
							<td>{booking?.date}</td>
							<td>{booking?.bookingStatus}</td>

							<td>{booking?.paid ? "Paid" : "Not paid"}</td>
							<td>
								<PaystackButton
									{...config}
									text="Paystack Button Implementation"
									onSuccess={(reference) =>
										handlePaystackSuccessAction(reference, booking.uuid)
									}
									onClose={handlePaystackCloseAction}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
