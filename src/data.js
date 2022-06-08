import { v4 as uuid } from "uuid";

export const candidateDetails = [
  {
    id: uuid(),
    type: "Open",
    candidates: [
      {
        id: uuid(),
        Name: "Mani kandan",
        from: "Cognizant",
      },
      {
        id: uuid(),
        Name: "Ajay",
        from: "Cognizant",
      },
      {
        id: uuid(),
        Name: "Pranesh",
        from: "Cognizant",
      },
      {
        id: uuid(),
        Name: "Barath",
        from: "Cognizant",
      },
    ],
  },
  {
    id: uuid(),
    type: "Contacted",
    candidates: [
      {
        id: uuid(),
        Name: "Krishna",
        from: "Cognizant",
      },
      {
        id: uuid(),
        Name: "Keerthana",
        from: "Cognizant",
      },
      {
        id: uuid(),
        Name: "Mohan",
        from: "Cognizant",
      },
      {
        id: uuid(),
        Name: "Guru",
        from: "Cognizant",
      },
    ],
  },
];
