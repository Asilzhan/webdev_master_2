
// // Cabinet Types
export type Cabinet = {
  id: string;
  name: string;
  description?: string;
  // members: User[];
  // chats: Chat[];
  // files: Attachment[];
  // assignments: Assignment[];
};

// // Chat Types
// type Chat = {
//   id: string;
//   messages: Message[];
// };

// type Message = {
//   id: string;
//   content: string;
//   timestamp: Date;
//   sender: User;
// };

// // Attachment System Types
// type Attachment = {
//   id: string;
//   name: string;
//   type: FileType;
//   uploadedBy: User;
//   uploadedDate: Date;
//   url: string;
// };

// type FileType = "PDF" | "DOC" | "PPT" | "IMG" | "OTHER";

// // Homework System Types
// type Assignment = {
//   id: string;
//   title: string;
//   description: string;
//   dueDate: Date;
//   assignedBy: User;
//   submissions: Submission[];
// };

// type Submission = {
//   id: string;
//   student: User;
//   submittedDate: Date;
//   attachment: Attachment;
//   grade?: Grade;
// };

// type Grade = {
//   value: number; // e.g., 90 for 90%
//   feedback?: string;
// };
