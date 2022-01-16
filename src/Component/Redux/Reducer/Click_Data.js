var initialState={
    data:[]
};
const ClickData=(state=initialState,action)=>{
    switch (action.type) {
        case 'CLICK_DATA': 
            return{
                data:action.data,
            }
        default:return state
            
    }
}
export default ClickData;