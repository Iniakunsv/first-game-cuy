import { LayoutId } from './types';
export const layouts: Record<LayoutId,{id:LayoutId;name:string;clueCount:number;challengeCount:number;description:string}> = {
1:{id:1,name:'FOUNDATIONS',clueCount:2,challengeCount:2,description:'Explore the practice room and learn core healthcare vocabulary.'},
2:{id:2,name:'GRAMMAR SHIFT',clueCount:4,challengeCount:4,description:'Use time markers, instructions, and workplace grammar.'},
3:{id:3,name:'PATIENT TALK',clueCount:6,challengeCount:6,description:'Use professional expressions and contextual communication.'},
4:{id:4,name:'CLINICAL PROCEDURES',clueCount:8,challengeCount:8,description:'Combine sequencing, grammar, safety, and workplace English.'}
};
