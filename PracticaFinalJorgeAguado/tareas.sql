USE [Tareas]
GO
/****** Object:  Table [dbo].[Tarea]    Script Date: 22/07/2023 11:30:07 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tarea](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Description] [nvarchar](255) NULL,
	[IsCompleted] [tinyint] NULL,
 CONSTRAINT [PK_Tarea] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Tarea] ON 

INSERT [dbo].[Tarea] ([Id], [Name], [Description], [IsCompleted]) VALUES (1, N'Tarea 1', N'Descripción para tarea 1', 1)
INSERT [dbo].[Tarea] ([Id], [Name], [Description], [IsCompleted]) VALUES (2, N'Investigación sobre .NET Core', N'Realizar una pequeña investigación sobre la historia y la actualidad de .NET Core.', 1)
INSERT [dbo].[Tarea] ([Id], [Name], [Description], [IsCompleted]) VALUES (3, N'Pasar lista', N'Pasar lista a los estudiantes.', 0)
INSERT [dbo].[Tarea] ([Id], [Name], [Description], [IsCompleted]) VALUES (4, N'Subir video', N'Subir un video a YouTube sobre la clase (max. 5 minutos de duración).', 0)
SET IDENTITY_INSERT [dbo].[Tarea] OFF
GO
