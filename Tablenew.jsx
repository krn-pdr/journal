private void AdjustSizeToContent()
{
    int horizontalPadding = 40; // left + right padding
    int verticalPadding = 30;   // top + bottom padding inside label

    int maxTextWidth = this.Width - horizontalPadding;

    Size proposedSize = new Size(maxTextWidth, int.MaxValue);

    Size textSize = TextRenderer.MeasureText(
        lblMessage.Text,
        lblMessage.Font,
        proposedSize,
        TextFormatFlags.WordBreak |
        TextFormatFlags.TextBoxControl |
        TextFormatFlags.NoPadding);

    // Set label size
    lblMessage.Height = textSize.Height + verticalPadding;

    int calculatedHeight =
        pnlHeader.Height +
        lblMessage.Height +
        btnOK.Height +
        60; // extra spacing / margins

    // Optional max height (recommended)
    int maxHeight = Screen.PrimaryScreen.WorkingArea.Height - 100;

    if (calculatedHeight > maxHeight)
    {
        calculatedHeight = maxHeight;
        lblMessage.AutoScroll = true;
    }

    this.Height = calculatedHeight;
}
