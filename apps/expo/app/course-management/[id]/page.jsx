import React, { useState, useEffect } from "react";


const CourseComponent = ( course ) => {
   
  
    if (course === undefined) return <Loader />; 

    return (
        <>
            <div className="flex items-center">
                        <div className="w-1/3 md:w-1/5 lg:w-1/4">
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar8.png"
                            alt="image"
                            className="w-full rounded-full border"
                        />
                        </div>
                        <div className="w-2/3 md:w-4/5 lg:w-3/4 ml-4">
                        <h5 className="text-xl font-bold">
                            Materia:{courseData?.name ? courseData.name : "sin nombre"}
                        </h5>
                        <p className="text-gray-700">
                            Profesor:{courseData?.teacher?.name? courseData.teacher.name : "Sin profesor"}
                        </p>

                        </div>
                    </div>
      </>
    );
};

export default CourseComponent;
