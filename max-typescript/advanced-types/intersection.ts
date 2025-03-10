type FileData = {
    path: string 
    content: string
}

type DatabaseData = {
    connectionUrl: string 
    credentials: string
}

type Status = {
    isOpen: boolean
    errorMessage?: string
}
// creating a new type that combines the two
// use the & symbol to combine them 


type AccessedFileData = FileData & Status
type AccessedDatabaseData = DatabaseData & Status