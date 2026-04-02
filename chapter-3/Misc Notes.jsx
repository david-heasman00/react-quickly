/*----------------------------------*/
/*----------------------------------*/
/*Branching in JSX*/
/*----------------------------------*/
/*----------------------------------*/


/*----------------------------------*/
/*Early Return for rendering nothing*/
/*----------------------------------*/

//Use early return for rendering nothing

//This is a long bad way but a vanilla way of doing it
class Countdown extends Component {
    render() {
        const seconds = this.props.remaining % 60;
        const minutes = Math.floor(this.props.remaining / 60);
        const message = <p>{minutes}:{seconds}</p>;
        if (seconds > 0 || minutes > 0) {
            return message;
        } else {
            return null;
        }
     }
}

//Nothing wrong with this approach, but many developers opt for the below because its faster - nothing renders if there;s nothing. We return
//early if there's a null.

class Countdown extends Component {
    render() {
        if (this.props.remaining === 0) {
            return null;
        }
        const seconds = this.props.remaining % 60;
        const minutes = Math.floor(this.props.remaining / 60);
        return <p>{minutes}:{seconds}</p>
    }
}

//Note - when we return null inside an if block we don't need to wrrite an else block. This else is implicit, if the if block is
//only visited after the condition fails. 

/*------*/
/* Ternary for alterrnatives */
/*------*/

//A common case in React is to render different elements based on whether a condition  is true or false
//E.g. a shopping cart where we want to display items if there are any items, but display a message
//saying there are no items when there are no items in the cart.
//A vanilla approach would be to assign it different values via a regular if/else statement block. But that's lengthy. 
//A better approach in React is to use the ternary operator. The ternary operator if you remember is an expression and 
//can be used inline as follows:

<p>User is {this.props.isOnline ? 'Online' : 'Offline'</p>

//Where the first statement after the ? is for the true case, and the : is for the false case

//We can create our shopping cart as before using this:

class ShoppingCart extends Component {
    render () {
        return (
            <aside>
                <h1>Shopping cart</h1>
                {this.props.item.length === 0 ? (                               //Note we also return the "null" statement earlier like before
                    <p>Your cart is empty. Go buy something!</p>
                ) : (
                    <CartItems items={this.props.items} />
                )}
            </aside>
        );
    }
}

/*------------*/
/* Logical operators for optional rendering*/
/*---------------*/

//Another common situation is to optionally render something if a condition is true, but nothing if it isn't. 
//E.g. we want to render a checkmark next to a username if the user is a verified user, but nothing for the unverified (like twitter blueticks)
//We take advantage of the AND operator, JavaScripts "truthy" and "falsy" aspects, and the fact logical operators short-circuit by 
//returning as soon as the truthiness of an entire expression is shown. 
//Thus when we do a && b, JavaScript
//  Returns a if a is falsy
//  Returns b if a is truthy

//It doesn't matter what's in b -- it'll get returned. React will also render false as the empty string. 
//(Visit your notes or codecademy cheatsheet on truthy and falsy)

class UserName extends Component {
    render() {
        return (
            <p>
                {this.props.username}
                {this.props.isVerified && <Checkmark />}
            </p>
        );
    }
}

/*-------------------------*/
/* Use objects for switching*/
/*-------------------------*/

/*
We've been only loooking at rendering an element or nothing, but what about situations where we want to render more than two
types of elements based on a condition?
Below situation we want to render an icon based on a blog post status:
 - draft - draft icon
 - published - published icon
 - any other state, is thus deleted, therefore a trash icon

 One approach would be to nest ternaries, but it isn't pretty. We don't use it. To illustrate
*/

//Bad nesting ternary approach:

class PostStatus extends Component {
    render() {
        return this.props.status === "draft" ?
        <DraftIcon /> :
        this.props.status === "published" ?
        <PublishedIcon /> :
        <TrashIcon />;
    }
}

/*
Yeah that's ugly AF. Another alternative is to use a `switch` statement, and simply return the different values
in each case. But a more declarative approach you see Developers use, is to use an object with properties for the 
different case resolving the different outcomes:
*/

//Create object with properties for the different conditions
const status2icon = {
    draft: <DraftIcon />,
    published: <PublishedIcon />,
    deleted: <TrashIcon />
};

//Write our condition and return block of code
class PostStatus extends Component {
    render() {
        return status2icon[this.props.status];              //Note use of bracket notation to look things up inside my object - you can't use
    }                                                       // dot notation, as dot notation doesn't understand abstract logic
}

/* 
Short and neat right? However notice something - this doesn't handle the case in which the status is  none of those things. We need 
an OR condition at the end in any unknown case
*/

class PostStatus extends Component {
    render()
        return status2icon[this.props.status] || status2icon.deleted;
}


/*
These are for all simple cases. But what about if more complicated logic? For that you need to use extra components.
The example rq03-cart-single illustrates this.
*/