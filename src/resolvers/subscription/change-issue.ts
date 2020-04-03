import pubsub from '../../subscription/pubsub';

//TODO: move subscribe to this file
export default () => {
    changeIssue : {
        subscribe: () => pubsub.asyncIterator(["issueTitleChanged"])
    }
    
   
    
}
