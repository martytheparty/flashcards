import { Component, inject, effect } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { VoiceRecognitionService } from '../../services/voice-recognition.service';
import { VoiceStateEnum } from '../../types/enums/voice-recognition.enums';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-toggle-recognition',
  imports: [
    MatSlideToggleModule,
    MatIconModule
  ],
  templateUrl: './toggle-recognition.html',
  styleUrl: './toggle-recognition.scss',
})
export class ToggleRecognition {

  voiceRecognitionService: VoiceRecognitionService = inject(VoiceRecognitionService);
  cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  voiceState: VoiceStateEnum = VoiceStateEnum.Off;


  constructor() {
    effect( () => {

      const currentVoiceRecognitionState: VoiceStateEnum = this.voiceRecognitionService.voiceRecognitionStateSignal();

      //queueMicrotask(() => {
        this.processVoiceRecognition(currentVoiceRecognitionState);
        this.cdr.detectChanges();
      //});

    } );
  }

  processVoiceRecognition(currentVoiceRecognitionState: VoiceStateEnum): boolean {
    this.voiceState = currentVoiceRecognitionState;
    return true;
  }

  onToggleChange(enabled: boolean) {
    if (enabled) {
      this.startVoice();
    } else {
      this.stopVoice();
    }
  }

  startVoice() {
    this.voiceRecognitionService.startRecord();
    this.voiceState = VoiceStateEnum.Waiting;
  }

  stopVoice() {
    this.voiceRecognitionService.stopRecord();
  }

  
}

