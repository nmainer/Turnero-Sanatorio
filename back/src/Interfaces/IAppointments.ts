export interface IHorario {
  hora: number,
  minutos : number
};


export interface IAppointment {
id: number,
date: string,
time: IHorario,
userId:number,
status: string,
}