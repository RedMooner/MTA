using System;
using System.Drawing;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        // Путь к файлу
        string filePath = args[0];

        // Получаем иконку файла
        Icon fileIcon = Icon.ExtractAssociatedIcon(filePath);

        // Преобразуем иконку в массив байтов
        byte[] iconBytes;
        using (MemoryStream ms = new MemoryStream())
        {
            fileIcon.Save(ms);
            iconBytes = ms.ToArray();
        }

        // Преобразуем массив байтов в Base64 строку
        string base64String = Convert.ToBase64String(iconBytes);

        // Выводим Base64 строку
        Console.Write(base64String);
    }
}