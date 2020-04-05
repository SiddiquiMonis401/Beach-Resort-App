import React, { Component } from 'react'
import items from './Data'

const RoomContext=React.createContext();
//There will be RoomProvider to provide the the data to the consumer to subscribe the changes...
//The reason of using the context provider is that we dont want to do the prop drilling becasue it will be annoyng thing for sure
//because every time you want to have some changes down in the component tree you have to drill the data through its all parent
//Components that will not be a good approach and thats why the React Community has just developed the Context API...
//Now we have learn why we use context the next step is to 'Looked at how we can use it ??'
//So, Here we will be using the context API Class
//It provides you the context Objext that will have an <ContextObject.Provider value="Here you will give the value to the childs that will use it"> Component..
//and will also have an <CContextObject.Conusmer> component ..



export default class RoomProvider extends Component {
    
    constructor(props){
        super(props);
        
       this.state={
        rooms:[],
        SortedRooms:[],
        FeaturedRooms:[],
        loading:true,
        price:0,
        size:0,
        maxPrice:0,
        maxSize:0,
        breakfast:false,
        pets:false,
        capacity:1,
        type:'all'
        

        }
    }
    
    //We will use the get data gunction and the reason we have loading property is that because when we get our data
    //from contentful it will help us to show the loading gif to the user as soon as he is not get on the console what he wanted to be have!
    //Ther will be getData function that will esure the fetching of the data once the component is mounted :)
    //Thats pretty much from it,Thanks.
    componentDidMount(){
        let rooms=this.FormatData(items);
        let FeaturedRooms=rooms.filter(item=>item.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price));
        let maxSize=Math.max(...rooms.map(item=>item.size));
        this.setState({
            rooms,
            FeaturedRooms,
            SortedRooms:rooms,
            loading:false,
            maxPrice,
            maxSize,
            price:maxPrice
            
        })
        
    }
     FormatData(items){
         let tempItem=items.map(item=>{
             let id=item.sys.id;
             let images=item.fields.images.map(images=>
                 images.fields.file.url);
             let rooms={ ...item.fields , images , id};
             return rooms;
         })
         return tempItem;
         
    }
    getRoom=(slug)=>{
        let tempRoom=[...this.state.rooms];
        const rooms=tempRoom.find(tempRoom=>tempRoom.slug===slug);
        return rooms;
    }
    handleChange=event=>{
        let type=event.target.type;
        let name=event.target.name;

        let value=event.target.value;
        type==="checkbox"?(
        this.setState({
            [name]:!this.state[name]},this.filterRooms)):
            this.setState({[name]:value},this.filterRooms)
        


    }
    filterRooms(){
       let {rooms,capacity,pets,breakfast,type,price}=this.state;
        let filterSortedRooms=[...rooms]
        capacity=parseInt(capacity);
        console.log(typeof(capacity))
        price=parseInt(price);
       
       if(type!=="all"){
            filterSortedRooms=filterSortedRooms.filter(items=>items.type===type);
       }
        if(capacity!==1){
            
          filterSortedRooms=filterSortedRooms.filter(items=>items.capacity >= capacity);
          console.log(filterSortedRooms)
       }
       if(pets){
        filterSortedRooms=filterSortedRooms.filter(items=>items.pets ===true);
       }
        
       
       
       if(breakfast){
        filterSortedRooms=filterSortedRooms.filter(items=>items.breakfast ===true);
       }
        
        if(price!==600){
            filterSortedRooms=filterSortedRooms.filter(items=>items.price<=price)
        }
       this.setState({
        SortedRooms:filterSortedRooms
    })
       
    }


    

    render() {
        return (
            //What we just did here is that we wrap the {this.props.children} means that any thing inside... 
            //<RoomProvider>
            //<App><-->{this.props.children}
            //</RoomProvider>
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}

            </RoomContext.Provider>
        )
    }
}
const RoomConsumer=RoomContext.Consumer;
export  {RoomContext,RoomConsumer,RoomProvider};

