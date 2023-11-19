function Content() {
     {/*This is the content conponent that will be shown on the homepage*/} 
     return (
        <div>
            <h1>Hello World!</h1>
            <h3>Current Time</h3>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
//export the content conponent
export default Content;