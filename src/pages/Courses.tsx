import { Outlet } from "react-router-dom";


export default function Courses() {
	// setSearchParams('name=ali');

	return (
		<div className="container mt-56 mb-56">
			{/* <CourseSearch className="grid md:grid-cols-2 gap-5 mb-5" />
			<div className="grid relative gap-4 md:grid-cols-2 lg:grid-cols-3  mt-14">
				{CoursesView.map((course, ind) => {
					return <CourseCartComponent key={ind} course={course} />;
				})}
			</div> */}
			<Outlet />
		</div>
	);
}
