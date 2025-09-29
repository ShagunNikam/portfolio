import ReactLogo from '../src/assets/svg/react.svg';
import Angular from '../src/assets/svg/angular.svg';
import Javascript from '../src/assets/svg/javascript.svg';
import CSS from '../src/assets/svg/css.svg';
import Github from '../src/assets/svg/github.svg';
import Typescript from '../src/assets/svg/typescript.svg';
import Jest from '../src/assets/svg/jest.svg';
import Html from '../src/assets/svg/html.svg';
import Npm from '../src/assets/svg/npm.svg';
import Mongodb from '../src/assets/svg/mongodb.svg';
import Redux from '../src/assets/svg/redux.svg';
import Tailwind from '../src/assets/svg/tailwind.svg'

export const skillData = [
  { name: 'React', Component: () => <img src={ReactLogo} width={100} height={100} alt="React Logo" /> },
  { name: 'Redux', Component: () => <img src={Redux} width={100} height={100} alt="Redux Logo" /> },
  { name: 'Angular', Component: () => <img src={Angular} width={100} height={100} alt="Angular Logo" /> },
  { name: 'Typescript', Component: () => <img src={Typescript} width={100} height={100} alt="Typescript Logo" /> },
  { name: 'Javascript', Component: () => <img src={Javascript} width={100} height={100} alt="Javascript Logo" /> },
  { name: 'HTML5', Component: () => <img src={Html} width={100} height={100} alt="HTML5 Logo" /> },
  { name: 'CSS', Component: () => <img src={CSS} width={100} height={100} alt="CSS Logo" /> },
  { name: 'Jest', Component: () => <img src={Jest} width={100} height={100} alt="Jest Logo" /> },
  { name: 'Github', Component: () => <img src={Github} width={100} height={100} alt="Github Logo" /> },
  { name: 'Npm', Component: () => <img src={Npm} width={100} height={100} alt="Npm Logo" /> },
  { name: 'MongoDB', Component: () => <img src={Mongodb} width={100} height={100} alt="MongoDB Logo" /> },
  { name: 'Tailwind', Component: () => <img src={Tailwind} width={100} height={100} alt="Tailwind Logo" /> },
];


export const companyData = [
    {
      id: 1,
      name: 'LTI Mindtree',
      position: 'Senior Specialist - Architecture',
      duration: 'Dec 2024 - Present',
    },
    {
      id: 2,
      name: 'Fiserv',
      position: 'Specialist',
      duration: 'Aug 2019 - Nov 2024',
    },
    {
      id: 3,
      name: 'Pivotroots',
      position: 'Experiential Developer',
      duration: 'Jan 2017 - Apr 2019',
    },
    {
      id: 4,
      name: 'Brainvire',
      position: 'Software Developer',
      duration: 'Mar 2016 - Nov 2016',
    },
    {
      id: 5,
      name: 'Vinnovate',
      position: 'Jr Software Developer',
      duration: 'Mar 2015 - Feb 2016',
    },
];