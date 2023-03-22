import styled from 'styled-components';

export const Button = styled.button`
border: 1px solid black;
border-radius: 2px;
margin: 10px 0;
&:first-child{
    background-color: green;
    &:hover,:focus{
        background-color: forestgreen;
    }
}
&:nth-child(2){
    background-color: darkorange;
    &:hover,:focus{
        background-color: orange;
    }
}
&:nth-last-child(1){
    background-color: red;
    &:hover,:focus{
        background-color: #F72F2F;
    }
}
&:not(:last-child){
margin-right: 10px;
}`