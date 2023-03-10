import { Component } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

class App extends Component{
  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "JavaScript"},
    ] ,
    current: ''
  }

  updateCourse = (e) => {
    this.setState({
      current : e.target.value,
    })

  }

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current === ""){
      return false;
    }else{
    courses.push({name : current})
    this.setState({courses,current:''})}
}

deleteCourse = (index) =>{
  let courses = this.state.courses;
  courses.splice(index,1);
  this.setState({courses})
}

editCourse = (index, value) =>{
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = value;
  this.setState({courses})
}
  render(){
    const {courses} = this.state;
    let length = courses.length;
    const courseList = length ? (
      courses.map( (course,index) => {
        return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })) : (
      <p>There is no item to show</p>
    );
  return (
    <section className="App">
     <h2>Add course</h2>
     <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
     <ul>{courseList}</ul>
    </section>
  );
}}

export default App;
