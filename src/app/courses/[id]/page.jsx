import EnrollForm from "./EnrollForm";
import fs from 'fs/promises';
import path from 'path';

const CourseDetails = async ({params}) => {
    const {id} = await params;
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const data = await fs.readFile(filePath, 'utf8');
    const courses = JSON.parse(data);
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
        {course.title}
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
