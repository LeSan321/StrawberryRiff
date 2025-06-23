
export interface User {
  id: string
  name?: string
  email?: string
  image?: string
  isAnonymous: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Song {
  id: string
  title: string
  genre?: string
  description?: string
  note?: string
  mood?: string
  filePath: string
  thumbnailPath?: string
  duration?: number
  fileSize?: number
  isPublic: boolean
  downloadCount: number
  playCount: number
  createdAt: Date
  updatedAt: Date
  uploader: User
  uploaderId: string
  likes?: SongLike[]
  reactions?: SongReaction[]
}

export interface Friendship {
  id: string
  status: 'PENDING' | 'ACCEPTED' | 'BLOCKED'
  createdAt: Date
  updatedAt: Date
  requester: User
  requesterId: string
  receiver: User
  receiverId: string
}

export interface Playlist {
  id: string
  name: string
  description?: string
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
  creator: User
  creatorId: string
  songs?: PlaylistSong[]
}

export interface PlaylistSong {
  id: string
  position: number
  addedAt: Date
  playlist: Playlist
  playlistId: string
  song: Song
  songId: string
}

export interface SongLike {
  id: string
  likedAt: Date
  user: User
  userId: string
  song: Song
  songId: string
}

export interface SongReaction {
  id: string
  type: 'FELT_THIS' | 'LISTENING_LOOP' | 'WANT_MORE' | 'HITS_HARD'
  reactedAt: Date
  user: User
  userId: string
  song: Song
  songId: string
}

export interface EmailInvitation {
  id: string
  email: string
  inviterName?: string
  inviterEmail: string
  message?: string
  status: 'PENDING' | 'ACCEPTED' | 'EXPIRED' | 'CANCELLED'
  token: string
  createdAt: Date
  updatedAt: Date
  expiresAt: Date
  inviter: User
  inviterId: string
}
