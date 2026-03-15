import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoiceRecognitionService } from './services/voice-recognition.service';
import { ToggleRecognition } from './components/toggle-recognition/toggle-recognition';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// WE NEED A SERVICE THAT CAN TURN CONTINOUS VOICE ON AND OFF

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    ToggleRecognition,
    MatToolbarModule
  ],
})
export class App {

  voiceRecognitionService: VoiceRecognitionService = inject(VoiceRecognitionService);

}
