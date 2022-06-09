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
        from: "TCS",
      },
      {
        id: uuid(),
        Name: "Pranesh",
        from: "Kongu Engineering college",
      },
      {
        id: uuid(),
        Name: "Barath",
        from: "Infosys",
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
        from: "Tech Mahindra",
      },
      {
        id: uuid(),
        Name: "Keerthana",
        from: "Cognizant",
      },
      {
        id: uuid(),
        Name: "Mohan",
        from: "Infosys",
      },
      {
        id: uuid(),
        Name: "Guru",
        from: "KCIT",
      },
    ],
  },
  {
    id: uuid(),
    type: "Technical 1",
    candidates: [
      {
        id: uuid(),
        Name: "Kumar",
        from: "BITS",
      },
      {
        id: uuid(),
        Name: "Brila",
        from: "TCS",
      },
      {
        id: uuid(),
        Name: "Tanny",
        from: "LPU",
      },
    ],
  },
  {
    id: uuid(),
    type: "Technical 2",
    candidates: [
      {
        id: uuid(),
        Name: "Swapnil",
        from: "CEG",
      },
    ],
  },
  {
    id: uuid(),
    type: "Culture Fit",
    candidates: [
      {
        id: uuid(),
        Name: "Kalam",
        from: "MIT",
      },
      {
        id: uuid(),
        Name: "Suman",
        from: "GIT",
      },
    ],
  },
];
