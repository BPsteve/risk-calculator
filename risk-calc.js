document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate-risk").addEventListener("click", function () {
        const likelihoodValues = { "high": 0.9, "medium": 0.6, "low": 0.3 };
        const impactValues = { "high": 3, "medium": 2, "low": 1 };

        let likelihood = document.getElementById("likelihood").value;
        let impact = document.getElementById("impact").value;

        let ratio = likelihoodValues[likelihood] * impactValues[impact];
        let riskLevel;

        if (ratio >= 0.3 && ratio <= 0.61) {
            riskLevel = "Low risk level, minimal impact"; // Change the text here for low level of risk
        } else if (ratio >= 0.62 && ratio <= 1.29) {
            riskLevel = "Medium risk level, moderate impact, some disruption to project, additional tracking and alternate approach may be required"; // Change the text that is displayed for a medium level of risk
        } else if (ratio >= 1.3 && ratio <= 2.7) {
            riskLevel = "High risk level, Major impact, different approach required, high priority management oversight and decision required"; // Change the text that is displayed for highlevel risk
        } else {
            riskLevel = "Invalid risk value";
        }

        document.getElementById("result").innerText = Risk Ratio: ${ratio.toFixed(2)}\n${riskLevel};
    });
});
