function Title (props) {
    // props.setName('Joel')
    console.log(props.age)
    return  <h1 className="title">Welcome, {props.name}!He is {props.age}</h1>

}

export default Title