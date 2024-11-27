import { createContext, useEffect, useState } from "react";
import { codeSnippets } from "../utils/enums/constants";
import axios from "axios";

export const filesContext = createContext();

const FilesProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const getCourses = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found. Please log in again.");
        return;
      }

      const response = await axios.get("http://127.0.0.1:8000/api/files", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 200) {
        console.log("File fetched successfully");
      } else {
        console.log("Unexpected response status:", response.status);
      }
      console.log(response.data.files);
    } catch (error) {
      console.error(error);
    }
  };

  const createFile = async (fileName, value, selectedLanguage) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found. Please log in again.");
        return;
      }
      const response = await axios.post(
        "http://127.0.0.1:8000/api/files",
        {
          name: fileName,
          content: value,
          language: selectedLanguage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // JWT token
          },
        }
      );
      if (response.status === 201) {
        console.log("File saved successfully");
      } else {
        console.log("Unexpected response status:", response.status);
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <filesContext.Provider value={{ createFile, files, setFiles }}>
      {children}
    </filesContext.Provider>
  );
};

export default FilesProvider;

// export const coursesContext = createContext();

// const CoursesProvider = ({ children, x }) => {
//   const [courses, setCourses] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   const handdleFilters = (filters) => {
//     // Logic
//     setFiltered();
//   };

//   const getCourses = () => {
//     axios.get("http://127.0.0.1:8000/api/courses").then(({ data }) => {
//       setCourses(data.courses);
//     });
//   };

//   const createCourse = (form) => {
//     axios
//       .post("http://127.0.0.1:8000/api/courses", form, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(({ data }) => {
//         const newCourse = data.new_course;

//         setCourses([...courses, newCourse]);
//       });
//   };

//   const editCourse = (id) => {
//     axios.put("http://127.0.0.1:8000/api/courses").then(({ data }) => {
//       setCourses(data.courses);
//     });
//   };

//   const deleteCourse = (id) => {
//     axios.delete("http://127.0.0.1:8000/api/courses").then(({ data }) => {
//       setCourses(data.courses);
//     });
//   };

//   useEffect(() => {
//     getCourses();
//   }, []);

//   return (
//     <coursesContext.Provider
//       value={{
//         list: courses,
//         filtered: filtered,
//         getCourses,
//         createCourse,
//         editCourse,
//         deleteCourse,
//       }}
//     >
//       <nav>This is my navbar</nav>
//       {children}
//     </coursesContext.Provider>
//   );
// };

// export default CoursesProvider;
