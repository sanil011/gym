

import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {exerciseOptions,fetchData, youtubeOptions} from "../utils/fetchData"
import Detail from "../component/Detail"
import ExerciseVideos from "../component/ExerciseVideos";
import SimilarExercise from "../component/SimilarExercises";


const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  
  const {id} =useParams();
  useEffect(() => {
    const fetchExerciseData = async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com'
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      
      const exerciseVideoData = await fetchData (`${youtubeSearch}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents)
      
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
      
    }
    fetchExerciseData();

    
  }, [id])
  
  return (
    <Box>
       <Detail exerciseDetail={exerciseDetail}/>
       <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        
       <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail