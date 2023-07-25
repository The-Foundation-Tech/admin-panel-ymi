import { useContext } from "react";
import { ProgramsContext } from "../../../context/ProgramsContext";
import Create from "./Create";
import Edit from "./Edit";
import Delete from "./Delete";

export default function Lists() {
	const { programs } = useContext(ProgramsContext);

	return (
		<div className="w-full">
			<div className="mt-10 mb-5">
				<Create />
			</div>

			<div className="flex justify-center items-center">
				<div className="overflow-x-auto w-full bg-base-300 rounded-lg text-xl">
					<table className="table">
						<thead className="text-lg">
							<tr>
								<th>#</th>
								<th>Nama Program</th>
								<th>Link Informasi</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody className="text-lg">
							{programs?.map((program, index) => (
								<tr key={program._id} className="hover:bg-gray-500">
									<td>{index + 1}</td>
									<td>{program.name}</td>
									<td>
										{program.link ? program.link : "Tidak tersedia"}
									</td>
									<td>
										<div className="flex items-center gap-x-4">
											<Edit program={program} />
											<Delete program={program} />
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
