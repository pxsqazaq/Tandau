export type Chat = {
  id: number;
  chat_name: string;
  created_at: string;
  messages: Message[];
};

export type Message = {
  id: number;
  chat_id: number;
  user_message: string;
  answer_message: string;
  created_at: string;
};

export type NewChat = {
  chat_name: string;
};

export type Messages = {
  chat_id: number;
  user_message: string;
};
