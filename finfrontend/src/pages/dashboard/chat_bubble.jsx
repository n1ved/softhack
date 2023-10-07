export default function ChatBubble({sent , message}){
    var sender;
    if(sent === true){
        sender = "chat-end"
    }
    else{
        sender = "chat-start"
    }
    return(
        <div className={sender}>
            <div className="chat-bubble">
                {message}
            </div>
        </div>
    );
}