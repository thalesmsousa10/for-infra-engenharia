// Add only documented, authorized cases. The preview route is not a delivered project.
export type CaseStudy = {
 title:string; summary:string; location:string; service:string; period:string;
 challenge:string; execution:string; result:string;
 images:{src:string;alt:string;caption:string}[];
};
