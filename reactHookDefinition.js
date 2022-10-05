/**
 * React Hooks
 * 
 * These three thing that you already learn
 *  - useState
 *  - useEffect
 *  - useRef
 * 
 * is part or React Hooks. 
 * 
 * what is React Hooks?
 * simply it's bring the feature (state management) in the component class 
 * into functional class
 * 
 * in previous when you want to manipulate the state menagement, you only can
 * do it using class component.
 * 
 *=> class Clock extends React.Component{
 *=>      constructor(props) {
 *=>          super(props)
 *=>          this.state = { date: new Date() }; -> 001 - useState
 *=>      }

 *=>      componentDidMount(){   -> 002 - useEffect
 *=>          this.timerID = setInterval(() => this.tick(), 1000);
 *=>      }

 *=>      componentwillUnmount(){ -> 003 - useEffect
 *=>          clearInterval(this.timerID)
 *=>      }

 *=>      tick(){
 *=>          this.setState({
 *=>              date: new Date()
 *=>          })
 *=>      }

 *=>      render() { -> 004 - return
 *=>          return (
 *=>              <div>
 *=>                  <h1> Hello, world!</h1>
 *=>                  <h2> It's {this.state.date.toLocalTimeString()}. </h2>
 *=>              </div>
 *=>          )
 *=>      }
 *=> }
 * 
 * 001 useState
 *     to perform the same functionality, we can just useState
 * 
 * 002/003 useEffect
 *     at the first time, useEffect will mount the element into the DOM
 *     if you want to unmount the DOM after mounting the componet, you 
 *     can just return the statement, like in the previous material.
 * 
 *     componentDidMount() -> execute while the component is rendered at the
 *                            first time, mounting into DOM tree
 *     componentWillUnmount() -> execute whiel the component is not mounted
 *                               or not rendered in the DOM tree
 * 
 * 004 render() -> render the element that we want to display
 *                 in functional component, we just return the element that we
 *                 want to display 
 * 
 * React Hook actually has a lof of function, in this tutorial, we only cover
 * certain of it
 */