import EnrollForm from "./EnrollForm";


const CourseDetails = async ({params}) => {
    const {id} = await params;
    const res = await fetch('https://skill-sphere-liart-eight.vercel.app/data.json')
    const courses = await res.json()
    const course = courses.find(c => c.id == id)
    console.log(course)
    return (
        <div className="max-w-7xl mx-auto px-4 pt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

    
    <div>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[260px] object-cover rounded-xl"
      />

      <h2 className="text-xl font-semibold mt-4">
        Name: {course.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {course.description}
      </p>

      <hr className="my-4 text-[#4e2ecf]/20" />

        <div className="flex flex-wrap gap-2 items-center text-sm text-gray-700">
            <p>📚 Category : {course.category}</p>
        <p>🎯 Level : {course.level}</p>
        <p>⭐ Rating : {course.rating}</p>
        <p>⏱ Duration : {course.duration}</p>
        </div>
        

      
      <div className="flex items-center gap-3 mt-5">
        <img
          src={course.instructor.image}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{course.instructor.name}</p>
          <p className="text-xs text-gray-500">
            {course.instructor.role} at {course.instructor.company}
          </p>
        </div>
      </div>
    </div>

    <EnrollForm></EnrollForm>
    

  </div>
</div>
    );
};

export default CourseDetails;
