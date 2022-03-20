import gql from "graphql-tag";

const typeDefs = gql`
 type Profile{
     nationality:String
     age:Int
     gender:String!
     status:String!
     number:Int
     firstName:String!,
    middleName:String!,
    lastName:String!,
    email:String!

 }
 type Education{
     institution:String!
     duration:Int!
     certificate:String!
     major:String!
     id:ID!
     username:String!
 }
 type Experience{
     duration:Int!
     organisation:String!
     responsibility:String!
     role:String!
     id:ID!
     username:String!
 }
 type Project{
     name:String!
     languages:String!
     description:String!
     link:String!
     image:String!
     createdAt:String!
 }
 input profileInput{
     nationality:String
     age:Int
     gender:String!
     status:String!
     number:Int
     firstName:String!,
     middleName:String!,
     lastName:String!,
     email:String
 }
 input projectInput{
     name:String!
     languages:String!
     description:String!
     link:String!
     image:String!

 }
 input eduInput{
    institution:String!
     duration:Int!
     certificate:String!
     major:String!
 }
 input exInput{
    duration:Int!
     organisation:String!
     responsibility:String!
     role:String!
 }
 type Query{
 getProfile:[Profile]
 getProjects:[Project]
 getEducations:[Education]
 getExperiences:[Experience]

}
 type Mutation{
    createProfile(profileInput:profileInput):Profile!
    createProject(projectInput:projectInput):Project!
    createEducation(eduInput:eduInput):Education!
    createExperience(exInput:exInput):Experience!

 }

`;
export default typeDefs;