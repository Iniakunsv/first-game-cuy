import { RoomObject } from './types';

export const objects: RoomObject[] = [

  {
    id: 'bed',
    name: 'Patient Bed',
    kind: 'bed',
    x: 17,
    y: 31,
    w: 25,
    h: 17,
    solid: true,
    interactive: true,
    clueId: 'c11',
    color: '#d9e2e8',
    icon: 'BED',
    description:
      'A clean practice bed for patient care.',
  },

  {
    id: 'desk',
    name: 'Nurse Desk',
    kind: 'desk',
    x: 61,
    y: 28,
    w: 17,
    h: 12,
    solid: true,
    interactive: true,
    clueId: 'c7',
    color: '#8b674e',
    icon: 'DESK',
    description:
      'A small nursing station desk.',
  },

  {
    id: 'chair',
    name: 'Chair',
    kind: 'chair',
    x: 65,
    y: 46,
    w: 8,
    h: 7,
    solid: true,
    interactive: true,
    clueId: 'c8',
    color: '#3f697d',
    icon: 'CHAIR',
    description:
      'A chair for patient conversations.',
  },

  {
    id: 'stethoscope',
    name: 'Stethoscope',
    kind: 'stethoscope',
    x: 48,
    y: 27,
    w: 7,
    h: 7,
    solid: false,
    interactive: true,
    clueId: 'c2',
    color: '#27323b',
    icon: 'STETH',
    description:
      'A diagnostic listening tool used in nursing practice.',
  },

  {
    id: 'thermometer',
    name: 'Thermometer',
    kind: 'thermometer',
    x: 44,
    y: 55,
    w: 7,
    h: 9,
    solid: false,
    interactive: true,
    clueId: 'c3',
    color: '#dce7ee',
    icon: 'TEMP',
    description:
      'A tool for measuring body temperature.',
  },

  {
    id: 'bp',
    name: 'Blood Pressure Monitor',
    kind: 'bp',
    x: 31,
    y: 61,
    w: 13,
    h: 9,
    solid: true,
    interactive: true,
    clueId: 'c4',
    color: '#526775',
    icon: 'BP',
    description:
      'A monitor used to measure blood pressure.',
  },

  {
    id: 'cabinet',
    name: 'Medicine Cabinet',
    kind: 'cabinet',
    x: 77,
    y: 21,
    w: 14,
    h: 20,
    solid: true,
    interactive: true,
    clueId: 'c6',
    color: '#b9c5cc',
    icon: 'MEDS',
    description:
      'Storage for practice supplies.',
  },

  {
    id: 'chart',
    name: 'Patient Chart',
    kind: 'chart',
    x: 82,
    y: 53,
    w: 9,
    h: 10,
    solid: false,
    interactive: true,
    clueId: 'c1',
    color: '#f0e6c7',
    icon: 'CHART',
    description:
      'A sample patient chart.',
  },

  {
    id: 'sink',
    name: 'Sink',
    kind: 'sink',
    x: 8,
    y: 63,
    w: 13,
    h: 10,
    solid: true,
    interactive: true,
    clueId: 'c5',
    color: '#a9c2ca',
    icon: 'SINK',
    description:
      'Hand hygiene station.',
  },

  {
    id: 'poster',
    name: 'Safety Poster',
    kind: 'poster',
    x: 5,
    y: 24,
    w: 10,
    h: 15,
    solid: false,
    interactive: true,
    clueId: 'c9',
    color: '#d7b65d',
    icon: 'SAFE',
    description:
      'A workplace safety reminder.',
  },

  {
    id: 'equipment',
    name: 'Medical Equipment',
    kind: 'equipment',
    x: 55,
    y: 60,
    w: 14,
    h: 12,
    solid: true,
    interactive: true,
    clueId: 'c10',
    color: '#7f909b',
    icon: 'EQUIP',
    description:
      'Training equipment with a service log.',
  },

  {
    id: 'door',
    name: 'Door',
    kind: 'door',
    x: 91,
    y: 39,
    w: 6,
    h: 18,
    solid: true,
    interactive: true,
    clueId: 'c12',
    color: '#704e3d',
    icon: 'EXIT',
    description:
      'The practice room door.',
  },

];