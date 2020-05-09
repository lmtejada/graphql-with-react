{
    company(id:"2"){
        id
        name
        users {
        firstName
        }
    }
}

  query namedQuerySample {
    user(id:"1"){
        id
        firstName
        company {
          name
        }
      }
  }

  {
    apple: company(id:"1"){
      id
      name
      description
      users {
        firstName
      }
    }
    google: company(id:"2"){
      id
      name
      description
      users {
        firstName
      }
    }
}

{
apple: company(id:"1"){
    ...companyDetails
}
google: company(id:"2"){
    ...companyDetails
}
}
  
fragment companyDetails on Company {
id
name
description
}

mutation {
    addUser(firstName: "Stephen", age: 26) {
        id
        firstName
        age
    }
}

mutation {
    deleteUser(id:"23") {
      id
    }
  }
  

mutation {
    editUser(id:"40", age: 10) {
        firstName
        age
    }
}


  

