export interface IStudentInfo {
  infoData?: IInfoData
  studentData?: IStudentData
  aboutData?: IAboutData
  carrerData?: ICarrerData
}

export interface IAboutData {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  category: string
}

export interface ICarrerData {
  career: ICareer[]
}

export interface ICareer {
  name: string
  id: string
  type: string
  modality: string
  status: string
  studentId: string
  cohort: string
}

export interface IInfoData {
  name?: string
  regID?: string
  status?: string
  image?: string
}

export interface IStudentData {
  info: IInfo
  risk: IRisk[]
}

export interface IInfo {
  period: string
  status: string
  college: string
  admission: string
  segment: string
  segmentDetail: string
}

export interface IRisk {
  subject: string
  riskLevel: string
  score: string
}
