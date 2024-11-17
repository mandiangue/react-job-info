import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  //currentItem
  const [currentItem, setCurrentItem] = useState(0)
  
  const fetchJobs = async () => {
    const res = await fetch(url)
    const newJob = await res.json()
    setJobs(newJob)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  
  if (isLoading) {
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }
  
  return <section className="jobs-center">
    <BtnContainer jobs={jobs}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
    />
    <JobInfo jobs={jobs} currentItem={ currentItem} />
  </section>
};
export default App;
