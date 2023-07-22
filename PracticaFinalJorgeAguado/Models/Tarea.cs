using System;
using System.Collections.Generic;

namespace PracticaFinalJorgeAguado.Models;

public partial class Tarea
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public byte? IsCompleted { get; set; }
}
