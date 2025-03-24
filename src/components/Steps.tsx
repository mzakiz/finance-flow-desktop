
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
}

export const Steps: React.FC<StepsProps> = ({ 
  steps, 
  currentStep, 
  orientation = 'horizontal' 
}) => {
  return (
    <div className={`${orientation === 'horizontal' ? 'flex items-center justify-between' : 'flex flex-col gap-8'}`}>
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isActive = currentStep === step.id;
        
        return (
          <div 
            key={step.id}
            className={`
              ${orientation === 'horizontal' ? 'flex-1' : 'flex items-center gap-4'}
              ${index !== steps.length - 1 && orientation === 'horizontal' ? 'relative' : ''}
            `}
          >
            {/* Step content */}
            <div className={`
              flex ${orientation === 'horizontal' ? 'flex-col items-center' : 'items-center gap-4'}
              ${isCompleted ? 'text-brand-teal' : isActive ? 'text-primary' : 'text-muted-foreground'}
            `}>
              {/* Icon */}
              <div className="relative flex items-center justify-center">
                {isCompleted ? (
                  <CheckCircle size={24} className="text-brand-teal" />
                ) : (
                  <Circle 
                    size={24} 
                    className={isActive ? 'text-primary' : 'text-muted-foreground'} 
                    fill={isActive ? 'rgba(98, 70, 234, 0.1)' : 'transparent'} 
                  />
                )}
              </div>
              
              {/* Text */}
              <div className={orientation === 'horizontal' ? 'text-center mt-2' : ''}>
                <p className={`text-sm font-medium ${isCompleted ? 'text-brand-teal' : isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.title}
                </p>
                {step.description && (
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                )}
              </div>
            </div>
            
            {/* Connector line for horizontal orientation */}
            {index !== steps.length - 1 && orientation === 'horizontal' && (
              <div className="absolute top-6 left-1/2 w-full h-[1px] bg-border">
                <div 
                  className="absolute top-0 left-0 h-full bg-brand-teal transition-all duration-500"
                  style={{ 
                    width: isCompleted ? '100%' : '0%',
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
