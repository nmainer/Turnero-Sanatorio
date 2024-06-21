export interface IHorario {
  hora: number,
  minutos : number
};


export interface IAppointment {
id: number,
date: string,
time: IHorario,
doctor: string,
userId:number,
status: string,
}