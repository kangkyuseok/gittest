import React from 'react';

interface Person {
    name: string;
    age?: number;
}

interface Developer {
    name: string;
    age?: number;
    skills: string[];
}

const person: Person = {
    name: '김사람',
    age: 20
};

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

const num:number = 10;
const str:string = 'hello';
const isTrue:boolean = true;
// const ud:undefined = undefined;
const ud:string | undefined = 'Hi';
const nl:number | null = 10;



console.log(expert);

