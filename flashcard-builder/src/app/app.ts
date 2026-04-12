import { Component, signal, inject } from '@angular/core';
import { VoiceRecognitionService } from './services/voice-recognition.service';
import { ToggleRecognition } from './components/toggle-recognition/toggle-recognition';

import { MatToolbarModule } from '@angular/material/toolbar';

import { ResultsComponent } from './components/results/results';

// WE NEED A SERVICE THAT CAN TURN CONTINOUS VOICE ON AND OFF

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    ToggleRecognition,
    MatToolbarModule,
    ResultsComponent
  ],
})
export class App {

  voiceRecognitionService: VoiceRecognitionService = inject(VoiceRecognitionService);

}
