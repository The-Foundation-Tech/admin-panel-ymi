import { NavLink } from "react-router-dom";
import Delete from "./Delete";
import { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";

export default function Lists() {
	const { newsletters } = useContext(NewsContext);

	return (
		<div className="w-full">
			<div className="mt-10 mb-5">
				<NavLink className={"btn btn-primary"} to={"/newsletter-create"}>
					Tambah Berita
				</NavLink>
			</div>

			<div className="flex justify-center items-center">
				<div className="overflow-x-auto w-full bg-base-300 rounded-lg text-xl">
					<table className="table">
						<thead className="text-lg">
							<tr>
								<th className="">#</th>
								<th className="">Judul</th>

								<th className="">Aksi</th>
							</tr>
						</thead>
						<tbody className="text-lg">
							{newsletters.map((news, index) => (
								<tr key={news._id} className="hover:bg-gray-500">
									<th className="">{index + 1}</th>
									<td className="capitalize">{news.title}</td>
									<td className="">
										<div className="flex items-center gap-x-4">
											<NavLink
												to={`/detail-news/${news._id}`}
												className={
													"px-4 py-1 bg-cyan-500 rounded text-white"
												}
											>
												Detail
											</NavLink>

											<NavLink
												to={`/edit-news/${news._id}`}
												className={
													"px-4 py-1 bg-green-500 rounded text-white"
												}
											>
												Edit
											</NavLink>
											<Delete news={news} />
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
