import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {

  selectedFile: File | null = null;
  progress = -1; // -1 represents no progress

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    if (this.selectedFile) {
      this.progress = 0;
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 10; // Simulated progress increment
        } else {
          clearInterval(interval);
          this.progress = -1; // Reset progress after completion
          console.log('File uploaded:', this.selectedFile?.name);
          this.selectedFile = null; // Reset selected file
        }
      }, 1000); // Simulated time for progress update
    } else {
      console.error('No file selected!');
    }
  }
}
