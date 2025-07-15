import React from "react";

import Comment from "./Comment"; // Comment 컴포넌트 불러오기

const comments = [ // 배열 변수
    {
        name: "홍순이",
        comment: "안녕하세요",
        imgname : "imgs/img1.PNG",
    },
    {
        name: "홍길동",
        comment: "오늘도 행복~!",
        imgname : "imgs/img2.PNG",
    },
    {
        name: "박길동",
        comment: "리액트~ 화이팅!!!!!",
        imgname : "imgs/img3.PNG",
    },
];

function CommentList() {
    return(
        <div>
            { //코딩을 쓸 때는 무조건 중괄호 안에다가 쳐야 한다.
                comments.map((comment, idx)=>{ // map() 함수는 배열의 각 요소를 순회하면서 새로운 배열을 생성합니다. map을 사용한 이유는 return을 사용하기 위해서
                    return(
                        <Comment key={idx} 
                                name={comment.name} 
                                comment={comment.comment}
                                imgname={comment.imgname}
                        />
                    )
                })
            }
        </div>
    )
}



export default CommentList;
