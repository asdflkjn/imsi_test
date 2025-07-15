/* eslint-disable */    // 경고 안 뜨게 하려면 
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "blue",
        fontSize: 18,
        fontWeight: "bold",
    },
    commentText: {
        color: "purple",
        fontSize: 16,
    },
};


function Comment(props) {
    return(
        <div style={styles.wrapper}>

            <div>
                <img src={props.imgname} style={styles.image}/>
            </div>

            <div style={styles.contentContainer}> 
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment;
