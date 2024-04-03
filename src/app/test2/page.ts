import React, { useEffect, useState } from "react";

type UserType = {
  firstName: string;
  lastName: string;
  customerId: number;
  note?: string;
  profession: professionType;
};

enum professionType {
  SYSTEMANALYTICS,
  ENGINEER,
  PRODUCTOWNER,
  FREELANCER,
  STUDENT,
}

//answer 1
export default function sortUserName(users: UserType[]) {
    return [...users].sort((a, b) => {
      const aStr = a.firstName + a.lastName + a.customerId.toString();
      const bStr = b.firstName + b.lastName + b.customerId.toString();
      return aStr.localeCompare(bStr);
    });
  }
  

//answer 2
export function sortByType(users: UserType[]) {
    return [...users].sort((a, b) => {
      return a.profession - b.profession;
    });
  }

//answer 3
export function getUniqueNumber(items: number[]) {
    const uniqueItems = new Set(items);
    return Array.from(uniqueItems);
  }


//answer 4  explain Interface and Enum
enum EnumDemo {
  value1HaveKey1,
  value2HaveKey2,
}

interface InterfaceDemo {
  string: string;
  number: number;
  object: typeof EnumDemo;
}

const example: InterfaceDemo = {
  string: "hi",
  number: 0,
  object: EnumDemo,
};
//In TypeScript, an enum can indeed be used as a value (where you're using the enum's members) and as a type (where you're describing the type of something that can hold one of the enum's values).
//Interfaces in TypeScript are used to define the shape of an object. They can include properties and method signatures, but no actual implementation. Interfaces are purely a TypeScript feature and are used during compile time for type checking. They do not compile down to any code that runs in JavaScript
//it's a TypeScript feature that compiles down to an object in JavaScript, when you have a small set of fixed values that are known at compile time, and you want to refer to them by name rather than by their actual values for clarity and maintainability.
 
// answer 5

type State  = {
    count: number;
  }
  
type Props = {}
  
  export class Count extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { count: 0 };
      this.handleAddCount = this.handleAddCount.bind(this);
    }
  
    handleAddCount() {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  }
  

// //answer 6
export const SearchBox = () => {
    const [value, setValue] = useState("");
  
    const makeAjaxCall = (value: string) => console.log(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        makeAjaxCall(value);
      }, 2000);
      return () => clearTimeout(handler);
    }, [value]);
  
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
  
    // return (
    //   <input type="search" value={value} onChange={handleOnChange} />
    // );
  };
  
