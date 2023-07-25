import Delete from "./Delete";
import Edit from "./Edit";
import Create from "./Create";
import { useContext } from "react";
import { UsersContext } from "../../../context/UsersContext";

export default function Lists() {
	const { users, getUsers } = useContext(UsersContext);

	return (
		<div className="w-full">
			<div className="mt-10 mb-5">
				<Create />
			</div>

			<div className="flex justify-center items-center">
				<div className="overflow-x-auto w-full bg-base-300 rounded-lg text-xl">
					<table className="table">
						{/* head */}
						<thead className="text-lg">
							<tr>
								<th>#</th>
								<th>Nama</th>
								<th>Nama pengguna</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody className="text-lg">
							{users?.map((user, index) => (
								<tr key={user._id} className="hover:bg-gray-500">
									<td>{index + 1}</td>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>
										<div className="flex items-center gap-x-4">
											<Edit user={user} />
											<Delete
												modalID={`delete${user._id}`}
												user={user}
											/>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
