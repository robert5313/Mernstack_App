import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    {
      title: 'Beginner Course',
      description: 'Ideal for first-time drivers. Covers basic vehicle controls, traffic laws, and safe driving practices.',
      image: 'https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg', // Placeholder image URL
      buttonText: 'Enroll Now'
    },
    {
      title: 'Defensive Driving',
      description: 'Learn proactive strategies to avoid accidents and minimize risks on the road. Hazard recognition, emergency maneuvers, and more.',
      image: 'https://cdn.pixabay.com/photo/2020/10/18/16/45/porsche-5665390_1280.jpg', // Placeholder image URL
      buttonText: 'Enroll Now'
    },
    {
      title: 'License Test Preparation',
      description: 'Get ready for your driver\'s license test. Review common test scenarios, practice maneuvers, and prepare for success.',
      image: 'https://cdn.pixabay.com/photo/2020/06/22/19/30/automobile-5330343_960_720.jpg', // Placeholder image URL
      buttonText: 'Enroll Now'
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          description={course.description}
          image={course.image}
          buttonText={course.buttonText}
        />
      ))}
    </div>
  );
};

export default Courses;