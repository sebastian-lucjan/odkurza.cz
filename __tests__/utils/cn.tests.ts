import { cn } from '@lib/utils';

describe('cn function', () => {
  it('should concatenate class names', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('should handle arrays of class names', () => {
    const result = cn(['class1', 'class2'], ['class3']);
    expect(result).toBe('class1 class2 class3');
  });

  it('should handle undefined and empty arguments', () => {
    const result1 = cn(undefined, 'class2');
    expect(result1).toBe('class2');

    const result2 = cn();
    expect(result2).toBe('');
  });

  it('should merge class names when using objects', () => {
    const result = cn({ class1: true, class2: false, class3: true });
    expect(result).toBe('class1 class3');
  });

  it('should merge class names with complex conditions', () => {
    const userRole = 'admin';
    const isActive = true;
    const result = cn({ 'btn-primary': userRole === 'admin' && isActive }, { 'btn-secondary': userRole !== 'admin' || !isActive }, 'btn');
    expect(result).toBe('btn-primary btn');
  });
});
